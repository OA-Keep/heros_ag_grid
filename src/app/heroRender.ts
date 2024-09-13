import { ICellRendererParams } from 'ag-grid-community';

export function HeroRenderer(params: ICellRendererParams) {
  const link = `<a href="#" target="_blank">link</a>`;
  return link;
}
