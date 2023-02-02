using AutoMapper;
using FeWheel.Engineers;
using FeWheel.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace FeWheel
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            CreateMap<Data, DataDTO>().ReverseMap();
            CreateMap<Data, Database>().ReverseMap();
        }
    }
}
