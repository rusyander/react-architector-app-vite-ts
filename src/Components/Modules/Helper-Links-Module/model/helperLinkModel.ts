export interface GroupName {
  groups: string;
  id: number;
}

export interface Hashtags {
  hashtag: string;
  id: number;
}

export interface IHelperLinkModel {
  groupName: GroupName;
  event: string;
  hashtags: Hashtags;
}
