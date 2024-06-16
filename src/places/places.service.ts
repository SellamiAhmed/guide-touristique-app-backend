import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) {}

  create(createPlaceDto: CreatePlaceDto, userId: number) {
    return this.prisma.place.create({
      data: { ...createPlaceDto, authorId: userId },
    });
  }

  findAll(userId: number) {
    return this.prisma.place.findMany({
      where: { authorId: userId },
    });
  }

  findOne(placeId: number) {
    return this.prisma.place.findUnique({ where: { id: placeId } });
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return this.prisma.place.update({ where: { id }, data: updatePlaceDto });
  }

  remove(id: number) {
    return this.prisma.place.delete({ where: { id } });
  }
}
