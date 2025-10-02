﻿namespace API.DTOs
{
    public class UserDto
    {
        public required string Username { get; set; }
        public required string Token { get; set; }
        public string PhotoUrl { get; set; }
        public string KnownAs { get; set; }
    }
}
