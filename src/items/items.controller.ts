import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateItemDto } from './dto'
import { ItemsService } from './items.service'

@Controller('items')
export class ItemsController {
  constructor (private readonly itemsService: ItemsService) {}
  @Get()
  findAll () {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id) {
    return this.itemsService.findOne(id)
  }

  @Post()
  create (@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto)
  }

  @Delete(':id')
  delete (@Param('id') id) {
    return this.itemsService.delete(id)
  }

  @Put(':id')
  update (@Body() updateItemDto: CreateItemDto, @Param('id') id) {
    return this.itemsService.update(id, updateItemDto)
  }
}
