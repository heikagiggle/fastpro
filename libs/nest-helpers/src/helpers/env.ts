export class Env<T extends object> {
  constructor(private secrets: T) {}

  get<T extends keyof typeof this.secrets>(key: T) {
    return this.secrets[key];
  }
}
