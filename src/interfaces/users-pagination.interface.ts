import { UserInterface } from './user.interface';

export interface UsersPaginationInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserInterface[]
}
