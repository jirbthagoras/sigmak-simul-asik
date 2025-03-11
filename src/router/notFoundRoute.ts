import { Router } from "express"

export const NotFoundRouter = Router()

NotFoundRouter.get("*", (_, res) => {
  res.status(404).render("templates/notFound")
})
