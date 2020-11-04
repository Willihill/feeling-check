export const asyncPromise = async (promise: Promise<any>) =>
  // eslint-disable-next-line @typescript-eslint/return-await
  promise.then((data: any) => [null, data]).catch((err: Error) => [err])
