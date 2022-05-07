export type Asset = {
  id: string,
  assetCode: string,
  assetName: string,
  logoUrl: string,
  fullLogoUrl: string,
  tags: string[]
};
  
export type Response = {
  code: string,
  message: string | null,
  messageDetail: string | null,
  data: Asset[]  
}
