export interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(_payload: ContactPayload): Promise<void> {
    void _payload;
}
