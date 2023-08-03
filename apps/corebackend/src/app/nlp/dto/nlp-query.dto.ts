import { NlpQuery, NlpQueryDocument } from "../schemas/nlpquery.schema";

export class NlpQueryDto {
  _id: string;
  query: string;
}

export class NlpQueryConvertor {
  static toDto(entity: NlpQuery | NlpQueryDocument): NlpQueryDto {
    const { query } = entity;
    const dto = new NlpQueryDto();
    
    if ((entity as NlpQueryDocument)._id) {
      dto._id = (entity as NlpQueryDocument)._id + "";
    }

    dto.query = query;
    return dto;
  }

  static toEntity(dto: NlpQueryDto): NlpQuery {
    //   const { id, name } = dto;
    const entity = new NlpQuery();
    entity.query = dto.query;
    //   entity.id = id;
    //   entity.name = name;
    return entity;
  }
}
