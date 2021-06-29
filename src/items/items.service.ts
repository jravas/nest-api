import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Item } from './interfaces'

@Injectable()
export class ItemsService {
  constructor (@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll () {
    return await this.itemModel.find()
  }

  async findOne (id: string) {
    return await this.itemModel.findOne({ _id: id })
  }

  async create (item: Item) {
    const newItem = new this.itemModel(item)
    return await newItem.save()
  }

  async delete (id: string) {
    return await this.itemModel.findByIdAndRemove(id)
  }

  async update (id: string, item: Item) {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true })
  }
}
