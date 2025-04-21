export interface Notification {
  id: string;
  timestamp: string;
  type: 'Information' | 'Alert' | 'Announcement';
  content: string;
  status: 'Read' | 'Unread';
}
