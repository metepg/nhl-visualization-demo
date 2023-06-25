export const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);
    const monthAbbreviation: string = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day: number = date.getDate();
    return `${monthAbbreviation} ${day}`;
}
export const timeInSeconds = ( minutes: number | undefined, seconds: number | undefined): number =>{
    if (!minutes || !seconds) return 0;
    return minutes * 60 + seconds;
}

