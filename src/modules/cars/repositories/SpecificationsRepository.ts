import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";



class SpecificationsRepository implements ISpecificationRepository {

  private specificarions: Specification[];

  constructor() {
    this.specificarions = [];
  }


  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specificarions.push(specification);

  }

  findByName(name: string): Specification {
    const specification = this.specificarions.find(specification => specification.name === name);

    return specification;
  }

}

export { SpecificationsRepository };