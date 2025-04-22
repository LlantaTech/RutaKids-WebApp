export interface Notification {
  id: string;
  timestamp: string;
  type: 'Information' | 'Alert' | 'Announcement' | 'Mail';
  content: string;
  status: 'Read' | 'Unread';
}
