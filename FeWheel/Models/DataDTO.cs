namespace FeWheel
{
using FeWheel;

    public class DataDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }

        public DataDTO() { }
        public DataDTO(Data DataItem) =>
        (Id, Name, IsComplete) = (DataItem.Id, DataItem.Name, DataItem.IsComplete);
    }
}
