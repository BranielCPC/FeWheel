using FeWheel;
using FeWheel.Engineers;
using System;
using System.Linq;

public class SupportScheduler
{
    private List<Data> _engineers;
    private Random _random;

    public SupportScheduler(List<Data> engineers)
    {
        _engineers = engineers;
        _random = new Random();
    }

    public (Data, Data) ScheduleEngineers()
    {
        var twoWeeksAgo = DateTime.Now.AddDays(-14);
        var freeENG = _engineers.Where(e => !e.Today && !e.Yesterday && e.Last2Weeks).ToList();

        if (freeENG.Count < 2)
        {
            throw new Exception("Not enough available engineers to schedule support.");
        }

        var firstEngineer = freeENG[_random.Next(freeENG.Count)];
        freeENG.Remove(firstEngineer);

        var secondEngineer = freeENG[_random.Next(freeENG.Count)];
        freeENG.Remove(secondEngineer);

        firstEngineer.Today = true;
        secondEngineer.Today = true;

        return (firstEngineer, secondEngineer);
    }

    public bool CheckSupportSchedule(int id)
    {
        var engineer = _engineers.FirstOrDefault(e => e.Id == id);
        if (engineer == null)
        {
            throw new Exception($"Engineer with id {id} not found.");
        }
        if (engineer.Today || engineer.Yesterday)
        {
            return false;
        }
        if (!engineer.Last2Weeks)
        {
            return false;
        }
        return true;
    }
}
