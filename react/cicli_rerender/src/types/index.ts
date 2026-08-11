export interface Player {
    id: number,
    position: string,
    name: string,
    price: number,
    isDrafted: boolean
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface ApiError {
  message: string;
}

export function isApiError(error: unknown): error is ApiError {
    return (
        error != null &&
        typeof error === "object" &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
    )
}