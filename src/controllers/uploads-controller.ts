import { Request, Response } from "express"
import { z } from "zod"
import uploadConfig from "@/configs/upload"

class UploadsController {
  async create(req: Request, res: Response) {
    try {
      const fileSchema = z.object({
        filename: z.string().min(1, "Arquivo é obrigatório"),
        mimetype:
          z.string()
            .refine((type) => uploadConfig.ACCEPTED_IMAGE_TYPES
              .includes(type), `Formato de arquivo inválido. Formatos permitidos: ${uploadConfig.ACCEPTED_IMAGE_TYPES}`
            ),
        size:
          z.number()
            .positive()
            .refine((size) => size <= uploadConfig.MAX_FILE_SIZE, `O tamanho máximo do arquivo é ${uploadConfig.MAX_SIZE}`)
      }).passthrough()

      const { file } = fileSchema.parse(req.file)

      res.json({ message: "ok" })
    } catch (error) {
      throw error
    }

    res.json({ file: req.file })
  }
}

export { UploadsController }