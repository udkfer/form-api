import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
import type { ICreatePost } from './types';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async getPosts() {
    const posts = await this.postsService.posts({});
    return posts;
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    const post = await this.postsService.post({ id: Number(id) });
    return post;
  }

  @Post()
  async createPost(@Body() data: ICreatePost) {
    const post = await this.postsService.createPost(data);
    return post;
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() data: Prisma.PostUpdateInput,
  ) {
    const post = await this.postsService.updatePost({
      where: { id: Number(id) },
      data,
    });
    return post;
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const post = await this.postsService.deletePost({ id: Number(id) });
    return post;
  }
}
