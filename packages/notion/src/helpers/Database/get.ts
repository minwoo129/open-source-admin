import { isFullPage } from '@notionhq/client';
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionDBDateType, NotionDBResponseType } from '../../constants/types';

type ExtractPropertyType<T> = Extract<
  PageObjectResponse['properties'][string],
  { type: T }
>;

interface commonExtractFuncArgs<T, D = null> {
  property: ExtractPropertyType<T>;
  defaultValue?: D;
}

interface extractRichTextArgs
  extends commonExtractFuncArgs<'rich_text', string> {}

interface extractTitleArgs extends commonExtractFuncArgs<'title', string> {}

interface extractNumberArgs extends commonExtractFuncArgs<'number', number> {}

interface extractPhoneNumberArgs
  extends commonExtractFuncArgs<'phone_number', string> {}

interface extractSelectArgs extends commonExtractFuncArgs<'select', string> {}

interface extractMultiSelectArgs
  extends commonExtractFuncArgs<'multi_select', string[]> {}

interface extractEmailArgs extends commonExtractFuncArgs<'email', string> {}

interface extractDateArgs
  extends commonExtractFuncArgs<'date', NotionDBDateType> {}

// ============================================================================================================================
const DATE_FORMAT = 'YYYY-MM-DD';
const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
// ============================================================================================================================
export const convertNotionDBGetResponse = <T extends Object>(
  response: QueryDatabaseResponse,
) => {
  return extractProperties<T>(response, 0, []);
};

const extractProperties = <T extends Object>(
  response: QueryDatabaseResponse,
  currentIdx: number,
  results: NotionDBResponseType<T>[],
) => {
  if (currentIdx === response.results.length) {
    return results;
  }

  const resultItem = response.results[currentIdx];
  if (!isFullPage(resultItem)) {
    return extractProperties<T>(response, currentIdx + 1, results);
  }

  const convertedItem = convertProperties<T>(resultItem);
  return extractProperties<T>(response, currentIdx + 1, [
    ...results,
    convertedItem,
  ]);
};

const convertProperties = <T extends Object>(
  resultItem: PageObjectResponse,
) => {
  let result: { [key in string]: any } = {};

  const { properties, last_edited_time, created_time, id } = resultItem;

  result['createdAt'] = created_time;
  result['updatedAt'] = last_edited_time;
  result['documentId'] = id;

  for (const key in properties) {
    const { type } = properties[key];

    if (type === 'title') {
      result[key] = extractTitle({ property: properties[key] });
      continue;
    }
    if (type === 'rich_text') {
      result[key] = extractRichText({ property: properties[key] });
      continue;
    }
    if (type === 'number') {
      result[key] = extractNumber({ property: properties[key] });
      continue;
    }
    if (type === 'phone_number') {
      result[key] = extractPhoneNumber({ property: properties[key] });
      continue;
    }
    if (type === 'select') {
      result[key] = extractSelect({ property: properties[key] });
      continue;
    }
    if (type === 'multi_select') {
      result[key] = extractMultiSelect({ property: properties[key] });
      continue;
    }
    if (type === 'email') {
      result[key] = extractEmail({ property: properties[key] });
      continue;
    }
    if (type === 'date') {
      result[key] = extractDate({ property: properties[key] });
      continue;
    }
  }

  return result as NotionDBResponseType<T>;
};

// ============================================================================================================================
const extractTitle = (args: extractTitleArgs) => {
  const { property } = args;
  return property.title[0].plain_text;
};

const extractRichText = (args: extractRichTextArgs) => {
  const { property } = args;
  if (property.rich_text.length === 0) {
    return '';
  }
  const item = property.rich_text[0];
  if (item.type !== 'text') {
    return '';
  }
  return item.text.content;
};

const extractNumber = (args: extractNumberArgs) => {
  const { property } = args;
  return property.number;
};

const extractPhoneNumber = (args: extractPhoneNumberArgs) => {
  const { property } = args;
  return property.phone_number;
};

const extractSelect = (args: extractSelectArgs) => {
  const { property } = args;
  const { select } = property;
  if (!select) {
    return null;
  }

  return select.name;
};

const extractMultiSelect = (args: extractMultiSelectArgs) => {
  const { property } = args;
  const { multi_select } = property;

  return multi_select.map((item) => item.name);
};

const extractEmail = (args: extractEmailArgs) => {
  const { property } = args;
  return property.email;
};

const extractDate = (args: extractDateArgs) => {
  const { property } = args;
  const { date } = property;
  if (!date) {
    return null;
  }

  const { start, end, time_zone } = date;
  let result: NotionDBDateType = {
    start: null,
    end: null,
    timeZone: time_zone,
  };

  if (start) {
    result.start = start;
  }
  if (end) {
    result.end = end;
  }

  return result;
};
