export class MenuItem {
  constructor(
    public text: string,
    public children: MenuItem[] = [],
    public routerLink?: string
  ) {}
}
