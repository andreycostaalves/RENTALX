import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {

  }

  execute({ name, description }: IRequest): void {
    const specificationAlreadExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error("Specification already exists")
    }

    this.specificationsRepository.create({
      name,
      description
    });
  }

}

export { CreateSpecificationService };