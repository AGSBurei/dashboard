package com.dashboard.payload.response;

public class ErrorResponse extends MessageResponse{
    private String error;

    public ErrorResponse(String message, String error) {
        super(message);
        this.error = error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }
}
