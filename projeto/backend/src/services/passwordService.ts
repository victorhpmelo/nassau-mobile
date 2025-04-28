import { PasswordDTO } from './../entities/password';
import { Password, Prisma, PrismaClient } from "../database/generated/prisma";

export class PasswordService {
  constructor(){}

  private prisma = new PrismaClient();

  private toModel = (dto: PasswordDTO): Prisma.PasswordCreateInput => {
    const password: Prisma.PasswordCreateInput = {
      type: dto.type,
      numberPass: dto.numberPass,
      emitDate: dto.emitDate,
      appointDate: dto.appointDate || null,
      window: dto.window || null,
      attended: dto.attended
    }
    return password;
  };

  async save(dto: PasswordDTO){ {
    const password:Prisma.PasswordCreateInput = this.toModel(dto);
    return await this.prisma.password.create({ data: password })
    };
  };

  async find(){
    return await this.prisma.password.findMany();
  }

  async findById(id:number){
    return await this.prisma.password.findUnique({ where:{ id:id}})
  }


  async delete(id:number){
    return await this.prisma.password.delete({ where:{ id:id}})
  };
};