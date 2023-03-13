/*
Keep track of the score during the game.

Santiago Tena
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObj;
    [SerializeField] int maxScore;
    [SerializeField] int minScore;
    [SerializeField] CreateBalls creator;
    public int score;


    // Start is called before the first frame update
    void Start()
    {
        creator = GetComponent<CreateBalls>();
        score = 0;        
    }

    public void AddPoints(int amount)
    {
        score += amount;
        tmpObj.text = "Score: " + score;
        Debug.Log("New Score: " + score);

        if (score >= maxScore)
        {
            // Finish();
            creator.StopBalls();
            tmpObj.text = "You win!";
        }

        if (score <= minScore)
        {
            // Finish();
            creator.StopBalls();
            tmpObj.text = "Game Over";
        }
    }


    // void Finish()
    // {
    //     creator.StopBalls();
    //     tmpObj.text = "Game Over";
    // }
}
