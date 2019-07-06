export class MenuItem {
  /* istanbul ignore next */
  constructor(
    public text: string,
    public children: MenuItem[] = [],
    public routerLink?: string
  ) {}
}
