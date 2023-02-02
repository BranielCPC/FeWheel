namespace FeWheel
{
    public class Data
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Lname { get; set; }
        public bool IsComplete { get; set; }
        public bool LastWork { get; set; }
        public string? Secret { get; set; }
        public bool Last2Weeks { get; internal set; }
        public bool Yesterday { get; internal set; }
        public bool Today { get; internal set; }
        public DateTime LastSupportDate { get; set; }
        public object? HalfDayShifts { get; internal set; }
    }
}
