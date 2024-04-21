import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';
import { ApiOkResponse, ApiBearerAuth, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
}
