import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Req() req, @Body() createPlaceDto: CreatePlaceDto) {
    console.log(req.user);
    return this.placesService.create(createPlaceDto, req.user.userId);
  }

  @Public()
  @Get()
  findAll(@Req() req) {
    return this.placesService.findAll(req.user);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.placesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.placesService.remove(+id);
  }
}
