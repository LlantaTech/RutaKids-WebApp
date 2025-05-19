export interface GlobalAlert {
  id: number;
  type: 'daxa' | 'success' | 'danger' | 'primary';
  message: string;
}
