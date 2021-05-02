import { Injectable } from '@nestjs/common';

type CatId = number;

export interface Cat {
  id : CatId;
  name: string;
}

@Injectable()
export class CatsService {
  private cats : Cat[] = [
    { id: 0, name: 'Shanti' },
    { id: 1, name: 'Akima' },
  ];

  create(createCatDto : Cat) : Cat {
    const highestId = !this.cats.length ? 0 : this.cats.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    createCatDto.id = highestId + 1;
    this.cats.push(createCatDto);
    return createCatDto;
  }

  getAll() : Cat[] {
    return this.cats;
  }

  remove(id : CatId) : Cat {
    const CAT = this.cats.find(item => item.id === id);

    // TODO: return 404
    if (!CAT) throw new Error(`Cat with id ${id} in ${JSON.stringify(this.cats)} not found`);

    this.cats = this.cats.filter(item => item.id !== id);
    return CAT;
  }

  update(id : CatId, newCatData : Cat) : Cat[] {
    const CAT = this.cats.find(item => item.id === id);

    // TODO: return 404
    if (!CAT) throw new Error(`Cat with id ${id} in ${JSON.stringify(this.cats)} not found`);

    CAT.name = newCatData.name;
    this.remove(id);
    this.create(CAT);
    return this.getAll();
  }
}
