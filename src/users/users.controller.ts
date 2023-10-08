import { Controller, Get} from '@nestjs/common';

@Controller('users')
export class UsersController {

// GET /users
@Get()
getUsers() {
  return 'All users';
  }
// GET /users/:id
@Get(':id')
  getUser() {
    return 'User 1';
}
// POST /users
@Post()
  createUser() {
    return 'Create user';
  }
// PUT /users/:id
@Put(':id')
  updateUser() {
    return 'Update user';
  }
// DELETE /users/:id
@Delete(':id')
  deleteUser() {
    return 'Delete user';
  }
  } 
