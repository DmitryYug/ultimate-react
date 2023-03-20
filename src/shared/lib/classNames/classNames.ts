type ModeTypes = Record<string, string | boolean>
export function classNames(cls: string, modes: ModeTypes = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modes).map(([key, value]) => {
            return value ? key : null
        }),
    ].join(' ')
}