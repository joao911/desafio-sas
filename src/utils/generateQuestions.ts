function generateQuestions(
    categoryId: number,
    difficulty: 'easy' | 'medium' | 'hard',
): string {
    return `/api.php?amount=1&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
}

export default generateQuestions;