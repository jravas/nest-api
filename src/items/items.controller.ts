import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateItemDto } from './dto'
import { Item } from './interfaces'
import { ItemsService } from './items.service'
@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor (private readonly itemsService: ItemsService) {}

  @Get()
  findAll (): Promise<Item[]> {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id)
  }

  @Post()
  create (@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto)
  }

  @Delete(':id')
  delete (@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id)
  }

  @Put(':id')
  update (
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto)
  }
}
