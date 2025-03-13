import { ComponentProps } from 'react';
import { Pie as ChartJSPie } from 'react-chartjs-2';

export interface PieProps extends ComponentProps<typeof ChartJSPie> {}
