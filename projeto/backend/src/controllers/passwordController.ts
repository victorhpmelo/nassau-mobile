import { Request, Response, NextFunction } from "express";
import { PasswordDTO } from "../entities/password";
import { Password } from "../database/generated/prisma";
import { PasswordService } from "../services/passwordService";

export class PasswordController{

  constructor(){}
  
  private readonly service = new PasswordService();

  async create (req: Request, res: Response, next: NextFunction) {
      try {
        const dto:PasswordDTO = req.body;
        const password = await this.service.save(dto);
        res.status(201).json(password);
      } catch(e){
        next(e)
      };
    };

  async findById (req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const password = await this.service.findById(id);
    } catch(e){
      next(e)
    }
  }


  async findAll (_: Request, res: Response, next: NextFunction) {
    try {
      const passwords = await this.service.find();
      res.status(200).json(passwords);
    } catch(e){
      next(e)
    }
  }

}