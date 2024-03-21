import { Email, SMS } from "./classes"

new Email().enviar({nome: "Valber", email: "test@gmail.com", telefone: "48484-484848"})
new SMS().enviar({nome: "Valber", email: "test@gmail.com", telefone: "48484-484848"})