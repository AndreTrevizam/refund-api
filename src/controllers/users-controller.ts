import { Request, Response } from "express"
import { z } from "zod"
import { UserRole } from "@prisma/client"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { hash } from "bcrypt"

class UsersController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3, { message: "Nome é obrigatório" }),
      email: z.string().trim().email({ message: "Email inválido" }).toLowerCase(),
      password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
      role: z.enum([UserRole.employee, UserRole.manager]).default(UserRole.employee)
    })

    const { name, email, password, role } = bodySchema.parse(req.body)

    const userWithSameEmail = await prisma.user.findFirst({
      where: { email }
    })

    if (userWithSameEmail) {
      throw new AppError("E-mail já cadastrado")
    }

    const hashedPassword = await hash(password, 8)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role
      }
    })

    res.status(201).json()
  }
}

export { UsersController }