export async function fakeServerAction() {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return "Action completed after 5 seconds"
}
