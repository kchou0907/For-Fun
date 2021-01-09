import java.util.*;
import java.lang.*;
import java.io.*;

public class test {

   public static void main (String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the phrase you want to be reversed:");
      String pledge = sc.nextLine();
      System.out.println("Reverse words or letters?");
      boolean word = (sc.next().charAt(0) == 'w');

      if (word){
         String[] words = pledge.split(" ");
         String revPledge = reverseWords(words);
         System.out.print(revPledge);
      } else {
         char[] chars = pledge.toCharArray();
         reverseLetters(chars);
         System.out.print(chars);
      }

   }

   public static String reverseWords(String[] words) {
      StringBuilder result = new StringBuilder();
      for (int i = words.length - 1; i >= 0; i--) {
         result.append(words[i]).append(" ");
      }
      return result.toString().trim();
   }

   public static void reverseLetters(char[] letters) {
      int endIndex = letters.length - 1;
      int i = 0;
      while(i < (endIndex - i)) {
         char temp = letters[i];
         letters[i] = letters[endIndex - i];
         letters[endIndex - i] = temp;
         i++;
      }
   }


}
