import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from './entity/category.entity';
import { CourseService } from 'src/course/course.service';
import { CourseCategory } from './entity/coursecategory.entity';
import { CreateCourseDTO } from 'src/course/dto/create-course.dto';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService, private course: CourseService){}

  async findAllCategory() {
    const data = await this.prisma.category.findMany() 
    return data.map<Category>(item => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        thumbnail: item.thumbnail,
        created_at: item.created_at,
        updated_at: item.updated_at ?? undefined,
        deleted_at: item.deleted_at ?? undefined
      }
    })
  }

  async findOneCategory(id: number) {
    const item = await this.prisma.category.findFirst({where: {id: Number(id)}})
    if (item == null) throw new NotFoundException("Category not found") 
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      thumbnail: item.thumbnail,
      created_at: item.created_at,
      updated_at: item.updated_at ?? undefined,
      deleted_at: item.deleted_at ?? undefined
    } as Category
  }

  async createCategory(data: CreateCategoryDTO) {
    return this.prisma.category.create({
      data: data
    })
  }

  async findCourseFromCategory(categoryId: number) {
    const data = await this.prisma.courseCategory.findMany(
      {
        include: {course: true, category: true},
        where: {categoryId: categoryId},
      }
    )
    return data.map<CourseCategory>(item => {
      const category = item.category
      const course = item.course
      return {
        id: item.id,
        category: category,
        course: course,
        created_at: item.created_at,
        updated_at: item.updated_at,
        deleted_at: item.deleted_at
      } as CourseCategory
      // return new CourseCategory(item.id, category, course, item.created_at, item.updated_at ?? undefined, item.deleted_at ?? undefined)
    })
  }

  async getCoursesFromCategory(categoryId: number) {
    return this.prisma.courseCategory.findMany({where: {categoryId: Number(categoryId)}, relationLoadStrategy: "query", include: {course: true}})
  }

  async createCourseFromCategory(categoryId:number, data: CreateCourseDTO) {
    const category = await this.prisma.category.findUniqueOrThrow({where: {id: Number(categoryId)}})
    const course = await this.prisma.course.create({data: data})
    return this.prisma.courseCategory.create({data: {courseId: course.id, categoryId: category.id, created_at: new Date()}})
  }
}
