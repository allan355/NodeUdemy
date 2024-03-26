export const getAge = (birthDate: string) => {
    if (!birthDate) return new Error('BirtkDate is required');
    return new Date().getFullYear() - new Date(birthDate).getFullYear()
}