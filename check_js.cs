using System;
using System.IO;

class Program {
    static void Main() {
        string text = File.ReadAllText(@"gui\wwwroot\js\app.js");
        int braces = 0;
        int parens = 0;
        int brackets = 0;
        int line = 1;
        for (int i = 0; i < text.Length; i++) {
            char c = text[i];
            if (c == '\n') line++;
            if (c == '{') braces++;
            if (c == '}') braces--;
            if (c == '(') parens++;
            if (c == ')') parens--;
            if (c == '[') brackets++;
            if (c == ']') brackets--;
            if (braces < 0) { Console.WriteLine($"Brace imbalance at line {line}"); break; }
            if (parens < 0) { Console.WriteLine($"Paren imbalance at line {line}"); break; }
            if (brackets < 0) { Console.WriteLine($"Bracket imbalance at line {line}"); break; }
        }
        Console.WriteLine($"Final count: Braces={braces}, Parens={parens}, Brackets={brackets}, Lines={line}");
    }
}
