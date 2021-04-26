import { petfinderClientId, petfinderClientSecret } from "../settings";

export const getToken = (req, res) => res.status(200).json({ message: `ID: ${petfinderClientId}   SECRET: ${petfinderClientSecret}` })
