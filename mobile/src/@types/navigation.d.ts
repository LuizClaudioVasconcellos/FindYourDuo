export interface GameParams {
  id: string;
  name: string;
  bannerURL: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
