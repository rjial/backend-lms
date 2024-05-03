import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';
import { ApiOkResponse, ApiBearerAuth, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CourseEntity } from 'src/course/entity/course.entity';
import { CreateCourseDTO } from 'src/course/dto/create-course.dto';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {

  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: Category, isArray: true})
  @ApiBearerAuth()
  async findAllCategory() {
    return await this.categoryService.findAllCategory()
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: Category, isArray: false})
  @ApiBearerAuth()
  async findOneCategory(@Param("id") categoryId: number) {
    return await this.categoryService.findOneCategory(categoryId)
  }

  @Post("")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: CourseEntity, isArray: false})
  @ApiBearerAuth()
  async createCategory(@Body() data: CreateCategoryDTO) {
    return await this.categoryService.createCategory(data)
  }

  @Post(":id/course")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: CourseEntity, isArray: false})
  @ApiBearerAuth()
  async createCourseFromCategory(@Param("id") categoryId: number, @Body() data: CreateCourseDTO) {
    return await this.categoryService.createCourseFromCategory(categoryId, data)
  }

  @Get(":id/course")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: CourseEntity, isArray: false})
  @ApiBearerAuth()
  async getCourseFromCategory(@Param("id") categoryId: number) {
    return await this.categoryService.getCoursesFromCategory(categoryId)
  }
}
