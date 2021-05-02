import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cat, CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() catFacts: Cat) {
    return this.catsService.create(catFacts);
  }

  @Get()
  findAll() : Cat[] {
    return this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newCatData: Cat) {
    return this.catsService.update(parseInt(id, 10), newCatData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Cat {
    return this.catsService.remove(parseInt(id, 10));
  }
}
