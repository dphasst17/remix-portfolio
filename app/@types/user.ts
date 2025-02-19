export interface UserData{
    gitUser: string,
    devUsername: string,
    github: string,
    facebook: string,
    linkedin: string,
    skills: string[],
    location: string,
}
export interface ProjectData{
    id: number
    name: string
    created_at: string
    updated_at: string
    language: string
    html_url: string
    default_branch: string
    full_name: string
    git_url: string
}