import { ComponentProps } from 'react';
import { Line as ChartJSLine } from 'react-chartjs-2';

export interface LineProps extends ComponentProps<typeof ChartJSLine> {}
